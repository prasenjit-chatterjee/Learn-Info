var fileUploadConfig = {
    mode: 'debug',
    uploadUrl: '/api/FileUpload',
    fileSizeLimit: 5,
    allowedExtentions: '',
    deniedExtentions: '',
    fileQueueSize: 5,
    onWhenAddingFileFailed: function (item, filter, options) {

    },
    onAfterAddingFile: function (fileItem) {

    },
    onSuccessItem: function (fileItem, response, status, headers) { },
    onErrorItem: function (fileItem, response, status, headers) { },
    onCancelItem: function (fileItem, response, status, headers) { },
    onAfterAddingAll: function (addedFileItems) { },
    onBeforeUploadItem: function (item) { },
    onProgressItem: function (fileItem, progress) { },
    onProgressAll: function (progress) { },
    onCompleteItem: function (fileItem, response, status, headers) { },
    onCompleteAll: function () { }
};

//app.controller('fileUploadController', function ($scope, FileUploader) {
angular.module('FileUploaderWidget', ['FileUploaderWidget']).controller('fileUploadController', function ($scope, FileUploader) {
    // Uploader Plugin Code

    var uploader = $scope.uploader = new FileUploader({
        //url: '/api/FileUpload'
        url: fileUploadConfig.uploadUrl
    });

    // FILTERS

    uploader.filters.push({
        name: 'extensionFilter',
        fn: function (item, options) {
            var filename = item.name;
            var extension = filename.substring(filename.lastIndexOf('.') + 1).toLowerCase();
            if (extension == "pdf" || extension == "doc" || extension == "docx" ||
                extension == "rtf")
                return true;
            else {
                alert('Invalid file format. Please select a file with pdf/doc/docs or rtf format and try again.');
                return false;
            }
        }
    });

    uploader.filters.push({
        name: 'sizeFilter',
        fn: function (item, options) {
            var fileSize = item.size;
            fileSize = parseInt(fileSize) / (1024 * 1024);
            if (fileSize <= 5)
                return true;
            else {
                alert('Selected file exceeds the 5MB file size limit. Please choose a new file and try again.');
                return false;
            }
        }
    });

    uploader.filters.push({
        name: 'itemResetFilter',
        fn: function (item, options) {
            if (this.queue.length < 5)
                return true;
            else {
                alert('You have exceeded the limit of uploading files.');
                return false;
            }
        }
    });

    // CALLBACKS

    uploader.onWhenAddingFileFailed = function (item, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
        fileUploadConfig.onWhenAddingFileFailed(item, filter, options);
    };
    uploader.onAfterAddingFile = function (fileItem) {
        console.info('Files ready for upload.');
        fileUploadConfig.onAfterAddingFile(fileItem);
    };
    uploader.onSuccessItem = function (fileItem, response, status, headers) {
        //$scope.uploader.queue = [];
        //$scope.uploader.progress = 0;
        console.info('Selected file has been uploaded successfully.');
        //fileUploadConfig.onSuccessItem(fileItem, response, status, headers);
    };
    uploader.onErrorItem = function (fileItem, response, status, headers) {
        console.info('Unable to upload your file. Please try again.');
        fileUploadConfig.onErrorItem(fileItem, response, status, headers);
    };
    uploader.onCancelItem = function (fileItem, response, status, headers) {
        console.info('File uploading has been cancelled.');
        fileUploadConfig.onCancelItem(fileItem, response, status, headers);
    };
    uploader.onAfterAddingAll = function (addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
        fileUploadConfig.onAfterAddingAll(addedFileItems);
    };
    uploader.onBeforeUploadItem = function (item) {
        console.info('onBeforeUploadItem', item);
        fileUploadConfig.onBeforeUploadItem(item);
    };
    uploader.onProgressItem = function (fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
        fileUploadConfig.onProgressItem(fileItem, progress);
    };
    uploader.onProgressAll = function (progress) {
        console.info('onProgressAll', progress);
        //fileUploadConfig.onProgressAll(progress);
    };
    uploader.onCompleteItem = function (fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
        fileUploadConfig.onCompleteItem(fileItem, response, status, headers)
    };
    uploader.onCompleteAll = function () {
        console.info('onCompleteAll');
        fileUploadConfig.onCompleteAll();
    };

    //console.info('uploader', uploader);
});