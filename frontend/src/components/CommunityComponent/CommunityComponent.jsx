import React from 'react';
import CommentBox from '../CommunityItems/CommentBox';
import RecentComments from '../CommunityItems/RecentComments';
import ExpertTalks from '../CommunityItems/ExpertTalks';
import { talks } from '@/constants/comments';

function CommunityComponent() {
  return (
    <section className="flex flex-row items-start justify-around gap-4 p-10">
      <div className="flex-1">
        <div className="sticky top-0 bg-white z-10 py-4 ">
          <h3 className="font-normal text-3xl text-center">
            Foro de Comunidad
          </h3>
        </div>

        <div className="flex flex-col gap-8 mt-4">
          <CommentBox />
          <RecentComments />
        </div>
      </div>

      <div className="flex-1">
        <div className="sticky top-0 bg-white z-10 py-4 ">
          <h3 className="font-normal text-3xl text-center">
            Charlas de expertos
          </h3>
        </div>

        <div className="mt-4 flex flex-col items-center ">
          <ExpertTalks talks={talks} />
        </div>
      </div>
    </section>
  );
}

export default CommunityComponent;
