# build-box
a continuous build daemon for the sessions (or any) software stack.
build-box can be deployed as a standalone docker container and is designed to work in a cloud environment.
it works best with google cloud platform right now (because thats what we use), but should also work with AWS.
build-box is configured from a single JSON file and is enough to automate buiding and deploying a github repo.