# Branches

## **Objective:** learn to work with branches.

### Exercise 23
1. Open your terminal and create a new folder called `git_101`
2. Move to the `git_101` folder
3. Initialize a new git repository with `git init`
4. Using the `git brach` command to see what branches you have in your repository. You should have just one branch called `master`.
5. We want to change the name of the `master` branch to `main`.  (go and search for that and do it).
6. Create a new branch called `feature_a`.
7. Move to the new branch and create a new text file and called `feature_A.txt`.
8. Edit the text file and add some content in the first line of the file.
9. Now commit that file with the message `first commit in feature a`. Make sure you are in the `feature_a` branch.
10. Go back to your `main` branch.
11. Merge the changes from `feature_a` branch into the main branch using `git merge`.
12. Use the `git log` command to see the commits story. What can you observe?
 ### **Exercise 24**
 1.  Now you have the `feature_A.txt` file in your main branch.
 2. Create a new branch called `feature_b` and move to that branch.
 3. Create a new text file and called `feature_B.txt`.
 4. Edit the text file and add some content in the first line of the file.
 5. Now commit that file with the message `first commit in feature b`.
 6. Move to the main branch and edit the `feature_A.txt` file.
 7. Edit the text file and add some content in the second line of the file.
 8. Create a new text file and called `feature_in_master.txt`.
 9. Edit the text file and add some content in the first line of the file.
 10. Now commit the changes with the message `feature in master`.
 11. Move to your `feature_b` branch.
 12. Edit the text file and add some content in the second line of the file.
 13. Now commit the changes with the message `second commit in feature b`.
 14. Move to main branch and Merge the changes from `feature_b` branch into the main branch using `git merge`.
 15. Use the `git log` command to see the commits story. What can you observe?
 16.  Describe the differences between first merge and second merge.
 ### **Exercise 25**
 **Disclaimer**: this exercise will explore your skills to research and look for technical information.
 1. You just found out that the features you merge were wrong and you need to revert them. Go and search how to revert changes and do it. The result of this exercise should be the main branch without any feature.
 .
  **Disclaimer**: Exercises 26 and 27 are exactly the same as 23 and 24 except for the command used to merge. Try to observe the differences between both methods. You can use the following git log command:
- `git log --all --decorate --oneline --graph`
 ### Exercise 26
1. Go to your  `git_101` folder.
2. Using the `git brach` command to see what branches you have in your repository. You should have just one branch called `master`.
3. We want to change the name of the `master` branch to `main`.  (go and search for that and do it).
4. Create a new branch called `feature_a`.
5. Move to the new branch and create a new text file and called `feature_A.txt`.
6. Edit the text file and add some content in the first line of the file.
7. Now commit that file with the message `first commit in feature a`. Make sure you are in the `feature_a` branch.
8. Go back to your `main` branch.
9. Merge the changes from `feature_a` branch into the main branch using `git rebase`.
10. Use the `git log` command to see the commits story. What can you observe?
 ### **Exercise 27**
 1.  Now you have the `feature_A.txt` file in your main branch.
 2. Create a new branch called `feature_b` and move to that branch.
 3. Create a new text file and called `feature_B.txt`.
 4. Edit the text file and add some content in the first line of the file.
 5. Now commit that file with the message `first commit in feature b`.
 6. Move to the main branch and edit the `feature_A.txt` file.
 7. Edit the text file and add some content in the second line of the file.
 8. Create a new text file and called `feature_in_master.txt`.
 9. Edit the text file and add some content in the first line of the file.
 10. Now commit the changes with the message `feature in master`.
 11. Move to your `feature_b` branch.
 12. Edit the textfile and add some content in the second line of the file.
 13. Now commit the changes with the message `second commit in feature b`.
 14. Move to main branch and Merge the changes from `feature_b` branch into the main branch using `git rebase`.
 15. Use the `git log` command to see the commits story. What can you observe?
 16.  Describe the differences between first merge and second merge.
