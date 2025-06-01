name=$1

grep -rl "bean" --exclude-dir=.git | xargs sed -i "s/bean/${name}/g"
grep -rl "Bean" --exclude-dir=.git | xargs sed -i "s/Bean/${name^}/g"
