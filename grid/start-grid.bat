cmd /C start "appium p4723" /MIN appium -p 4723
cmd /C start "appium p4724" /MIN appium -p 4724
cmd /C start "hub" /MIN java -jar grid.jar hub
TIMEOUT /T 30
cmd /C start "node 1" /MIN java -jar grid.jar node --config pixel-2.toml
TIMEOUT /T 5
cmd /C start "node 2" /MIN java -jar grid.jar node --config pixel-4.toml
