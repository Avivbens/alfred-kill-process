<div align="center">

# Alfred Kill Process

<br>

[![Latest Version Downloads](https://img.shields.io/github/downloads/avivbens/alfred-kill-process/latest/total?label=Latest%20Version%20Downloads&color=green)](https://github.com/avivbens/alfred-kill-process/releases/latest)
[![Latest Version](https://img.shields.io/github/v/release/avivbens/alfred-kill-process?label=Latest%20Version&color=green)](https://github.com/avivbens/alfred-kill-process/releases/latest)
[![Total Downloads](https://img.shields.io/github/downloads/avivbens/alfred-kill-process/total?label=Total%20Downloads&color=blue)](https://github.com/avivbens/alfred-kill-process/releases)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/kcao7snkgx)

</div>

## Description

Alfred workflow to kill a process by name, PID or path.

### Fuzzy Search

We support fuzzy search :ninja:

You can search with partial names, PIDs or paths - we will find the process for you :sparkles:

### Install via GitHub Releases :sparkles:

```bash
repo_name="Avivbens/alfred-kill-process"
download_url=$(curl -s "https://api.github.com/repos/$repo_name/releases/latest" | grep "browser_download_url.*alfredworkflow" | cut -d '"' -f 4)

curl -fsSLk $download_url -o ~/Desktop/alfred-kill-process.alfredworkflow
open ~/Desktop/alfred-kill-process.alfredworkflow
```

## Usage

-   `!` keyword to `kill` a process by name, PID or path.
-   `!!` keyword to `kill -9`, same as above.
