/* WEB API ENTRY POINT */

import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
const app = express();

const port = process.env['port'] || 3000;

const www = (request: Request, response: Response, next: any) => {
	console.log("🚀 ~ file: index.ts:11 ~ www ~ req:", 'Serve Index File', request.path);

	const indexFilePath = path.join(__dirname, 'www', 'index.html');

	fs.readFile(indexFilePath, (err, file) => {
		if (err) {
			console.error(err.message);
			response.status(500).send();
			return;
		}
		response.type('html').send(file.toString());
	})
	next();
}
app.use(express.static(path.join(__dirname, 'www')));

// app.get('/*', (req, res) => {
// 	console.log("🚀 ~ file: index.ts:10 ~ app.get ~ req:", req.path);
// 	res.json({ success: true })
// })

app.listen(port, () => {
	console.log(`-- Server is running on port: ${port} --`);
})
