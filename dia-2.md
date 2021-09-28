# Day 2: Welcome to StackEdit!

## First steps with git: exercises

### Exercise: your first commit [20 min]

**Objectives:** learn to initialize new git repositories, add files to it and make commits.

Welcome to the first exercise of the git course! This is the warm-up, so you will be guided step-by-step on exactly what you need to do.

1.  Go to your desired directory and create a new folder called `git_101`
2.  Change directory into `/git_101` and list its content. You should see nothing.
3.  Create a new empty git repository at the root of the `git_101` directory, so that we can then version control our code.
4.  List the content of the directory again using `-a`. What’s the difference now?
5.  Using the `touch` command, create empty files called `first.txt` and `second.txt` in your repository directory.
6.  By using `git add first.txt`, add `first.txt` to the staging area. Confirm with `git status -s` that it worked.
7.  Confirm with `git status` that it worked. What is different?
8.  Using `git commit -m` with the message `Initial commit` add `first.txt` to the repository.
9.  Run the `git log` command to have a look at your commit.
10. By using `git commit -a -m`, add `second.txt` to staging area. Confirm with `git status` that it worked. The message should be `Second commit`.
11. Using `git log`, confirm that the commits made in the previous exercises worked correctly.
12. Create a copy of  `first.txt`  file as `first_copy.txt`
13. Run the `git status` command. What do you observe?
14. Untrack `second.txt`.
15. Run the `git status` command. Are there any untracked files? _hint_: there should be.
16. Add `first_copy.txt` to the stage area.
17. Edit `first_copy.txt` add a phrase to the file `“My content File”`, save the file.
18. Run `git diff` What do you observe?
19. Add all files to the git repository, except for `second.txt`.
20. Run the `git status` command again to make sure the staged content is correct before proceeding with the commit.
21. Commit your changes with the message `Insert a phrase`.
22. You just found out that the file that should have the phrase was `second.txt` and not  `first_copy.txt`. Remove `first_copy.txt` file, edit `second.txt` and add the phrase to that file.
23. Add the file to stage area and commit the changes with the message `Correct file correct phrase`.
25. Display the (modest) history of your git repo with the following variations of the git log command:
    -   `git log`
    -   `git log --pretty=oneline`
    -   `git log --all --decorate --oneline --graph`
