
import GitlabService from './gitlab.service';
import Task from '../models/task.model';
import Member from '../models/member.model';
import Project from '../models/project.model';

async function getMemberIdByGitlabId(member) {
  if (member.id) {
    const m = await Member.findOne({ gitlabId: member.id }, '_id').exec();
    return { memberId: m._id };
  }
  return null;
}

async function getProjectIdByGitlabId(project) {
  if (project.id) {
    const p = await Project.findOne({ gitlabId: project.id }, '_id').exec();
    if (p) {
      return p._id;
    }
  }
  return null;
}

async function refreshTasks() {
  return GitlabService.getAllIssues()
    .then((issues) => {
      issues.forEach(async (issue) => {
        let assignees = [];
        if (issue.assignees.length > 0) {
          const promises = issue.assignees.map(getMemberIdByGitlabId);
          assignees = await Promise.all(promises);
        }
        const projectId = await getProjectIdByGitlabId({ id: issue.project_id });
        Task.findOneAndUpdate({ gitlabId: issue.id }, {
          name: issue.title,
          gitlabIid: issue.iid,
          description: issue.description,
          gitlabProjectId: issue.project_id,
          projectId,
          weight: issue.weight,
          assignedTo: assignees,
        }, { new: true, upsert: true });
      });
    });
}


async function refreshMembers() {
  return GitlabService.getGroupMembers()
    .then((members) => {
      members.forEach((member) => {
        Member.findOneAndUpdate({ gitlabId: member.id }, {
          name: member.name,
          avatar: member.avatar_url,
          username: member.username,
        }, { new: true, upsert: true });
      });
    });
}

const refreshProjects = () => {
  return GitlabService.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        Project.findOneAndUpdate({ gitlabId: project.id }, {
          name: project.name,
        }, { new: true, upsert: true });
      });
    });
};

async function refreshAllData() {
  await refreshMembers();
  await refreshProjects();
  await refreshTasks();
}

exports.refreshAllData = refreshAllData;
exports.refreshTasks = refreshTasks;
exports.refreshMembers = refreshMembers;
exports.refreshProjects = refreshProjects;
