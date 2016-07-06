// Configuration file
const paths = {
	"scss": {
		"in": "./src/scss/*.scss",
		"out": "./dist/css"
	},
	"js": {
		"entryFile": "./src/js/app.babel.js",
		"in": "./src/js/**/*.babel.js",
		"out": "./dist/js"
	}
}

exports.paths = paths
