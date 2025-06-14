#!/bin/bash

name=$1

# Find and replace lowercase "bean"
find . -type f -not -path '*/.git/*' -exec grep -l "bean" {} + | while read -r file; do
    if [[ "$(uname)" = "Darwin" ]]; then
        sed -i '' "s/bean/${name}/g" "$file" # macOS requires empty extension for -i flag
    else
        sed -i "s/bean/${name}/g" "$file"
    fi
done

# Find and replace uppercase "Bean"
find . -type f -not -path '*/.git/*' -exec grep -l "Bean" {} + | while read -r file; do
    capitalized_name=$(echo "${name^}")

    if [[ "$(uname)" = "Darwin" ]]; then
        sed -i '' "s/Bean/${capitalized_name}/g" "$file" # macOS requires empty extension for -i flag
    else
        sed -i "s/Bean/${capitalized_name}/g" "$file"
    fi
done
