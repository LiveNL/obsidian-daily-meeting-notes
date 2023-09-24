module.exports = {
    start,
};

async function start(params) {
    let filePath = await params.quickAddApi.utility.getClipboard();
    var fileVars = filePath.split("/");
    var fileName = fileVars.pop();
    fileName = fileName.slice(0, -3);
    return fileName;
}
