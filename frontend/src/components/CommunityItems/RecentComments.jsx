import React from 'react';
import CardComment from './CardComment';
import { comments } from '@/constants/comments';

export default function RecentComments() {
  return (
    <div className="rounded-lg border border-none bg-white shadow-md overflow-hidden">
      <h4 className="p-5 font-extralight text-start text-2xl ">
        Comentarios recientes
      </h4>
      <div className="flex flex-col items-center">
        <CardComment comments={comments} />
      </div>
    </div>
  );
}
