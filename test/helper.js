exports.test = function(name, path) {
    describe(name, function() {
        require(path);
    });
};

function getSkillSet() {
    var skills = ["node.js", ".net", "javascript", "NoSQL", "SQL", "html", "css"];
    var skillCount = parseInt((2 + Math.random() * (skills.length - 3)).toString(), 10);
    var skillSet = [];
    for (var i = 0; i < skillCount; i++) {
        var skillIndex = parseInt((Math.random() * (skills.length - 1)).toString(), 10);
        skillSet.push({
            name: skills[skillIndex],
            grade: parseInt((3 + (Math.random() * 7)).toString(), 10)
        });
    }
    return skillSet;
}

exports.newData = function(no, group) {
    var stamp = Date.now() / 1000 | 0;
    return {
        no: no || stamp,
        group: group || 0,
        code: stamp.toString(36),
        name: "Name-" + stamp,
        date: new Date(),
        age: parseInt((17 + Math.random() * 28).toString(), 10),
        skills: getSkillSet()
    };
};
