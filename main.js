// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user) {
    if(user.userRole === 'ADMIN') {
        return true;
    } else {
        return false;
    }
}
function isAdminAlt(user) {
    return user.userRole === 'ADMIN';
} 

function getEmail(user) {
    console.log(user.firstName);
    console.log(user.lastName);
    const lowCaseFirst = user.firstName.toLowerCase();
    const lowCaseLast = user.lastName.toLowerCase();
    
    return '$(lowCaseFirst.$(lowCaseLast)@codeimmersives.com';
}

function getPlaylistLength(playlistObj) {
    return playlistObj.songs.length;
}

function getHardestHomework(homework) {
    //this combines objects with for loops
    let smallest = Infinity; //this number could also be Infinity so there isn't a cap
    let hardest = '';
    for(const items of homework) {
        if (items.avgScore < smallest) { 
            hardest = item.name; // we're keeping track of two objects
            smallest = item.avgScore; //second object
        }
        
        //console.log(item); // all the hw items
        //console.log(item.name)// just the name of the object
    }
    
    console.log(hardest);
}

function createPhonebook(names,nums) {
const createPhonebook = {};
for (let i = 0; i < names.length; i ++)

const name = [i];
const nums = nums[i];

phonebook[names[i] = nums[i]]; // cannot use dot notations here
// must use brackets bc we don't know what the value would be
// use dot when you already know what the value is
// ex: phonebook.fourOneOne (bc we know the value) (.dot notation)
// ex: phonebook[object/variables] (bc we don't know its value)

}
return createPhonebook;

createPhonebook (
    
    ['Jimothy', 'Maria', 'Karl'],
    ['123-456-7890', '000-000-0000', '999-888-7766'],
)


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};