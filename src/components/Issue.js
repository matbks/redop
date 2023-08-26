import React, { useState } from 'react';
import Notes from './Notes';

function Issue() {
  const [issueData, setIssueData] = useState({ title: 'Exemplo de Demanda', description: 'Descrição da demanda' });

  return (
    <div>
      <h2>{issueData.title}</h2>
      <p>{issueData.description}</p>
      <Notes />
    </div>
  );
}

export default Issue;
