const arrr = [
    { "peasant": true, "dinner": "yes", "sex": "hell yeah" },
    { "peasant": false, "dinner": "no", "sex": "not really" },
    { "peasant": false, "dinner": "yeah", "sex": "female" }
];

const res = arrr.filter(yesh => yesh.sex.match(new RegExp("femalE","i")));
console.log(undefined);