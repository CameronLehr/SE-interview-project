# Add candidate category filter to list page

### User story
As a partner user, I expect to be able to filter candidates by their category and see the available category options in a dropdown. 

### Acceptance Criteria:
- A dropdown select of candidate category options should be clearly visible near the page title
- Upon selecting a candidate category, the visible candidate cards should be filtered to just those who have that candidate category
- Default list view is ALL CATEGORIES
- Which list is currently selected should always display in the dropdown
- Candidate Categories dropdown options should be:
        - [ ] CUSTOMER SUCCESS
        - [ ] SALES
        - [ ] HR
        - [ ] PROJECT MANAGEMENT
        - [ ] SOFTWARE AND DATA
        - [ ] ALL CATEGORIES

### Testing Scenarios:
- Assert that a dropdown is rendered.
- Verify that changing the category displays the correct candidates.
- Verify all candidates are visible by default.
- Verify currently selected category is displayed.

### Questions:
Was it intentional that the repo wasn't working when it was cloned? I had to fix a few import statements that were incorrect. 
In CardBottom.spec.js line 6 was the //TODO intended for me? 
