CHROME_DEVEL_SANDBOX=${PWD}/`find node_modules/puppeteer/.local-chromium -iname "chrome_sandbox"`

pdf:
	npm run save-pdf -- --url http://localhost:3000 --savePath Vladimir_Mitin_CV.pdf
