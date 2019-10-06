import { AUTH_TOKEN } from '../credentials.json';
import { GROUP_NAME } from '../config.json';
const ROOT_URL = 'https://gitlab.com/api/v4';

exports.getMilestones = () => fetch(`${ROOT_URL}/groups/${GROUP_NAME}/milestones?private_token=${AUTH_TOKEN}`)
  .then((results) => results.json())
  .then((data) => {
    const milestones = data.map((m) => {
      return {
        id: m.id,
        title: m.title,
        startDate: m.start_date,
        endDate: m.due_date,
      };
    });
    return Promise.resolve(milestones);
  });

exports.createMilestone = (params) => {
  const { title, endDate, startDate } = params;
  return fetch(`${ROOT_URL}/groups/${GROUP_NAME}/milestones?private_token=${AUTH_TOKEN};title=${title};due_date=${endDate};start_date=${startDate}`, {
    method: 'POST',
  })
    .then((results) => results.json())
    .then((data) => {
      return Promise.resolve(data);
    });
};

exports.getProjects = () => fetch(`${ROOT_URL}/groups/${GROUP_NAME}/projects?private_token=${AUTH_TOKEN};per_page=100`)
  .then((results) => results.json())
  .then((data) => Promise.resolve(data));


exports.getIssuesForProject = (projectId) => fetch(`${ROOT_URL}/projects/${projectId}/issues?private_token=${AUTH_TOKEN};state=opened`)
  .then((results) => results.json())
  .then((data) => {
    return Promise.resolve(data.map((issue) => ({
      id: issue.id,
      iidInProject: `${issue.project_id}_${issue.iid}`,
      assignees: issue.assignees ? issue.assignees.map((a) => a.id) : [],
      iid: issue.iid,
      projectId: issue.project_id,
    })));
  });

exports.getProject = (projectId) => fetch(`${ROOT_URL}/projects/${projectId}?private_token=${AUTH_TOKEN}`)
  .then((results) => results.json())
  .then((data) => {
    return Promise.resolve(data);
  });

exports.getIssue = (iidInProject) => {
  const [projectId, iid] = iidInProject.split('_');
  return fetch(`${ROOT_URL}/projects/${projectId}/issues/${iid}?private_token=${AUTH_TOKEN}`)
    .then((results) => results.json())
    .then((data) => {
      const { id, web_url, title, assignees, labels, project_id, iid, due_date, merge_requests_count, description } = data;
      return Promise.resolve({
        url: web_url,
        title,
        assignees: assignees ? assignees.map((a) => a.id) : [],
        labels,
        iid,
        projectId: project_id,
        dueDate: due_date,
        mergeRequestsCount: merge_requests_count,
        description,
        id: id,
        iidInProject,
      });
    });
};

exports.assignIssue = (iidInProject, memberId) => {
  const [projectId, iid] = iidInProject.split('_');
  return fetch(`${ROOT_URL}/projects/${projectId}/issues/${iid}?private_token=${AUTH_TOKEN};assignee_id=${memberId}`, {
    method: 'PUT',
  })
    .then((results) => results.json())
    .then((data) => {
      return Promise.resolve();
    });
};

exports.getGroupMembers = () => {
  return fetch(`${ROOT_URL}/groups/${GROUP_NAME}/members?private_token=${AUTH_TOKEN}`)
    .then((results) => results.json())
    .then((data) => {
      return Promise.resolve(data);
    });
};

exports.getMember = (userId) => fetch(`${ROOT_URL}/groups/${GROUP_NAME}/members/${userId}?private_token=${AUTH_TOKEN}`)
  .then((results) => results.json())
  .then((data) => {
    return Promise.resolve({
      name: data.name,
      id: data.id,
      avatar: data.avatar_url,
    });
  });
