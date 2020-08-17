CHROME_DEVEL_SANDBOX=${PWD}/`find node_modules/puppeteer/.local-chromium -iname "chrome_sandbox"`

pdf_en:
	npm run save-pdf -- --url http://localhost:3000/en --savePath Vladimir_Mitin_CV.pdf

pdf_ru:
	npm run save-pdf -- --url http://localhost:3000/ru --savePath Vladimir_Mitin_CV_RU.pdf

pdf: pdf_en
