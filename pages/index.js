import CandidateCard from '../src/components/candidateCard';
import candidatesJSON from '../candidates';

const useGetCandidates = () => {
  const res = JSON.parse(candidatesJSON);
  return res.candidates;
}


export default function Home() {
  // mock hook
  const candidates = useGetCandidates();

  return (
    <div>
      <h1>Candidates By Category</h1>
      {candidates.map(candidate => 
        <CandidateCard key={candidate.id} data-cy={`card-${candidate.name}`} candidate={candidate} />
      )}
    </div>
  )
}
