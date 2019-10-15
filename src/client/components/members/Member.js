import React, { useState, useEffect } from 'react';

import {
  Card,
  CardHeader,
  CardContent, 
} from '@material-ui/core';

import MemberAvatar from './MemberAvatar';


function Member({ memberId, children, name, avatarUrl}) {
  const [memberData, updateMemberData] = useState({});

  useEffect(() => {
    if ((!name || !avatarUrl) && memberId) {
      const getMemberData = async () => {
        const result = await fetch(`/api/members/${memberId}`);
        updateMemberData(result || {});
      };
      getMemberData();
    }
  }, []);

  return (
    <Card>
      <CardHeader
        avatar={<MemberAvatar name={name || memberData.name} url={avatarUrl || memberData.avatar} />}
        title={name}
      />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

export default Member;
