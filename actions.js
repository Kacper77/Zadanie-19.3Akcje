const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function createComment() {
    return {
        type: 'CREATE_COMMENT'
    }
}

function editComment() {
    return {
        type: 'EDIT_COMMENT'
    }
}

function removeComment() {
    return {
        type: 'REMOVE_COMMENT'
    }
}

function thumbUpComment() {
    return {
        type: 'THUMB_UP_COMMENT'
    }
}

function thumbDownComment() {
    return {
        type: 'THUMB_DOWN_COMMENT'
    }
}