# Explodemium.Code
Explodemium.Code is a code editor just ment for coding, nothing super complex to get used to! E.C (Explodemium.Code) is a code editor designed with a minimal design and easy, simple buttons, nothing to clutter up your workspace, its just you and the code, you can also check out the extensive theme selection by thinking of your favorite theme and give it a go in the theme input, if it works congrats!
E.C a code editor for everyone, even beginners

# Building Explodemium.Code for Windows
It's actually pretty easy to build! You need nwjs (Node Webkit), once you have obtained it (its also included in the source code under "editor.build"), simply zip up the contents you want, than with your neat little .zip package, simply rename the .zip part to .nw drag that in your nwjs folder, thats almost it!

# Compiling Your APP.NW for Windows
Click the home icon on the taskbar, and search for command prompt (cmd for short), once in this window, you'll want to change directory into your folder with the app.nw you created and the nw.exe, once you make sure those are there, your ready for the next step, type cd C:\path\to\your\nwjs\folder <-- change this to your actual path! Then once thats over with, you have one step left! Simply type "copy /b nw.exe+app.nw explodemiumcode.exe" If it worked you should see a .exe in the directory you changed to! Click on it, does it work? If your going to ship it off somewhere into the jungle don't forget the dependencies (your app needs the best buddy you compiled it with, node webkit! (Plus maybe others))
