import fs from 'fs';
import path from 'path';

export function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'thinks'));
  return files.map(filename => ({
    slug: filename.replace('.md', '')
  }));
}
