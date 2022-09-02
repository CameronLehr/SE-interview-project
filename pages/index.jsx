import CandidateCard from "../src/components/candidateCard";
import candidatesJSON from "../candidates";
import { useState } from "react";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

const useGetCandidates = () => {
  const res = JSON.parse(candidatesJSON);
  return res.candidates;
};

const categories = [
  "ALL CATEGORIES",
  "CUSTOMER SUCCESS",
  "SALES",
  "HR",
  "PROJECT MANAGEMENT",
  "SOFTWARE AND DATA",
];

export default function Home() {
  // mock hook
  const [category, setCategory] = useState(categories[0]);

  const candidates = useGetCandidates();

  function candidateCategory(event) {
    setCategory(event.target.value);
  }

  return (
    <div data-testid="home-body">
      <h1>Candidates By Category</h1>
      <Select
        name="selectList"
        id="selectList"
        onChange={candidateCategory}
        data-testid="category-dropdown"
        value={category}
      >
        {categories.map((category) => (
          <MenuItem value={category} key={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      {candidates
        .filter(
          (candidate) =>
            candidate.category === category || category === "ALL CATEGORIES"
        )
        .map((candidate) => (
          <CandidateCard
            key={candidate.id}
            data-cy={`card-${candidate.name}`}
            candidate={candidate}
          />
        ))}
    </div>
  );
}
