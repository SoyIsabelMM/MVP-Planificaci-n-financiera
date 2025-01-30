import React from 'react';
import CommentBox from '../CommunityItems/CommentBox';

function CommunityComponent() {
  return (
    <section className="flex flex-row items-center justify-around gap-4 p-10">
      <div>
        <h3 className="font-normal text-3xl text-center">Foro de Comunidad</h3>
        <CommentBox />
      </div>

      <div>
        <h3 className="font-normal text-3xl">Recomendado para vos</h3>
      </div>
    </section>
  );
}

export default CommunityComponent;
