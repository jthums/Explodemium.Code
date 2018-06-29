var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");

onload = checkFileSupport();

document.getElementById('load_btn').addEventListener('click', choosefile);

var themeInput = document.getElementById("input_theme");
var modeInput = document.getElementById("input_mode");

//var saveThemeBtn = document.getElementById("save_theme_btn").onclick = chooseThemes;

setInterval(function() {
    //console.log(editor.getSession().getMode().$id);
    console.log (modeInput.value);
        editor.session.setMode("ace/mode/" + modeInput.value);
    chooseThemes();
}, 1000);


editor.resize();
editor.commands.addCommand({
    name: 'save',
    bindKey: {win: "Ctrl-S", "mac": "Cmd-S"},
    exec: function(editor) {
        console.log("saving", editor.session.getValue())
        saveSingleFile();
    }
});

editor.commands.addCommand({
    name: 'htmlMode',
    bindKey: {win: "Ctrl-Shift-2", "mac": "Cmd-Shift-2"},
    exec: function(editor) {
        editor.session.setMode("ace/mode/html");
        document.getElementById("code_mode").value = "HTML";
        //console.log("saving", editor.session.getValue())
    }
});

function chooseThemes() {
    if (themeInput.value == null) {
        editor.setTheme("ace/theme/" + "monokai");
    }
    
    if (themeInput.value != null) {
        editor.setTheme("ace/theme/" + themeInput.value);
    }
}

function choosefile() {
  document.getElementById('file-input').click();
}

//document.getElementById("save_btn").addEventListener("click", function() {
//    var filename = "foo";
//    var file = new File([editor.getValue()], filename + ".js", {type:"text/plain;charset=utf-8"});
//    saveAs(file);
//});

var save_btn = document.getElementById("save_btn").onclick = saveSingleFile;
var filename_input = document.getElementById("input_filename");

function saveSingleFile() {
    var save = editor.getValue();
    var blob = new Blob([save],{type:"text/plain;charset=utf-8"});
    if (filename_input != null) {
        saveAs(blob, filename_input.value);
    }
    
    if (filename_input == null) {
        saveAs(blob, "unnamed-file.txt");
    }
}

function loadTabs () {
    newSession = editor.createEditSession(text, "mode/javascript");
    var oldSession = editor.session;
    editor.setSession(newSession);
}

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
    console.log(element.textContent);
    editor.session.setValue(element.textContent);
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);

function checkFileSupport() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        console.log('The File APIs are fully supported in this browser.');
    } else {
        console.log('The File APIs are not fully supported in this browser.');
    }
}

//newSession = ace.createEditSession(text, mode/*optional*/)
//var oldSession = editor.session
//editor.setSession(newSession)
// to restore old state call editor.setSession(oldSession)