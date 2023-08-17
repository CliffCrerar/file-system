import {
	readdirSync, statSync
} from 'fs';
import { join, extname } from 'path';
import { DirectoryContent } from './types';

export default function (path: string) {
	const dir = readdirSync(path);
	return dir
		.filter(fileName => !fileName.includes('$'))
		.map((fileName: string, idx: number): DirectoryContent | null => {
			try {
				const fullPath = join(path, fileName);
				const stat = statSync(fullPath);
				const isDir = stat.isDirectory();
				return {
					fileName,
					fullPath,
					isDir,
					extension: extname(fullPath),
					fileSize: isDir ? 0 : stat.size
				}
			} catch (err) {
				console.error(err);
				return null;
			}
		})
		.filter(content => content != null);
}

