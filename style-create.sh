declare -a arr=( "abap" "algol" "algol_nu" "arduino" "autumn" "average" "base16-snazzy" "borland" "bw" "catppuccin-frappe" "catppuccin-latte" "catppuccin-macchiato" "catppuccin-mocha" "colorful" "doom-one" "doom-one2" "dracula" "emacs" "evergarden" "friendly" "fruity" "github-dark" "github" "gruvbox-light" "gruvbox" "hr_high_contrast" "hrdark" "igor" "lovelace" "manni" "modus-operandi" "modus-vivendi" "monokai" "monokailight" "murphy" "native" "nord" "nordic" "onedark" "onesenterprise" "paraiso-dark" "paraiso-light" "pastie" "perldoc" "pygments" "rainbow_dash" "rose-pine-dawn" "rose-pine-moon" "rose-pine" "rrt" "solarized-dark" "solarized-dark256" "solarized-light" "swapoff" "tango" "tokyonight-day" "tokyonight-moon" "tokyonight-night" "tokyonight-storm" "trac" "vim" "vs" "vulcan" "witchhazel" "xcode-dark" "xcode")

## now loop through the above array
for i in "${arr[@]}"
do
   echo "$i"
   hugo gen chromastyles --style "$i" > "$i".css
   # or do whatever with individual element of the array
done

# then replace with regex in vscode:
# \.(bg|chroma) \{ ((background-|)color:#.{3,6};)+ \}
# .$1 { color: var(--cfg); background-color: var(--cbg); }