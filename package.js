Package.describe({
    name: 'tewksbum:server-session',
    summary : "Serverside Session through a Meteor.Collection (get, set, equals etc.) w/ check",
    version: "0.0.0",
    git: "https://github.com/tewksbum/meteor-server-session"
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@0.9.0');

    api.use('underscore', 'client');
    api.use(['underscore', 'check'], 'server');
    api.use(['livedata', 'mongo-livedata'], ['client', 'server']);

    api.export('ServerSession');

    api.add_files([
        'lib/server-session.js'
    ], ['client', 'server']
    );
});

Package.on_test(function (api) {
    api.use(
        ['matteodem:server-session', 'tinytest', 'test-helpers']
    );

    api.add_files(
        'tests/test-both.js',
        ['client', 'server']
    );
});