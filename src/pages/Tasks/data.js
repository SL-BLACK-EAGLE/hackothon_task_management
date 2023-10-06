





const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "NAME", uid: "name", sortable: true},
    {name: "AGE", uid: "age", sortable: true},
    {name: "ROLE", uid: "role", sortable: true},
    {name: "TEAM", uid: "team"},
    {name: "EMAIL", uid: "email"},
    {name: "STATUS", uid: "status", sortable: true},
    {name: "ACTIONS", uid: "actions"},
    {name: "PROJECTS", uid: "projects"},
];

const statusOptions = [
    {name: "Active", uid: "active"},
    {name: "Paused", uid: "paused"},
    {name: "Vacation", uid: "vacation"},
];

const users = [
    {
        id: 1,
        name: "Tony Reichert",
        role: "CEO",
        team: "Management",
        status: "active",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com",
        project: 'This is new project'
    },
    {
        id: 2,
        name: "Zoey Lang",
        role: "Tech Lead",
        team: "Development",
        status: "paused",
        age: "25",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com",
        project: 'This is old project'
    },


];


export {columns, users, statusOptions};
