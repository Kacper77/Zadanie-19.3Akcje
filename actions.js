const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function createComment(text) {
    return {
        type: CREATE_COMMENT,
        text: 'nowy komentarz',
        id: uuid.v4
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id: 10,
        text: 'edycja tekstu'
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: 10,
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: 10,
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: 15,
    }
}