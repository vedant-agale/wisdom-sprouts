// app.js
const fs = require('fs').promises;
const path = require('path');

// Folder aur File ke paths set kar rahe hain
const dirPath = path.join(__dirname, 'myFiles');
const filePath = path.join(dirPath, 'example.txt');
const newFilePath = path.join(dirPath, 'renamedExample.txt');

async function manageFiles() {
    try {
        // 1. Create Directory (Folder banana)
        await fs.mkdir(dirPath, { recursive: true });
        console.log('✅ 1. Directory created: myFiles');

        // 2. Write to File (File banakar usme text likhna)
        await fs.writeFile(filePath, 'Hello Vedant, this is your first Node.js file!');
        console.log('✅ 2. File written successfully.');

        // 3. Read File (File ka data padhna)
        const data = await fs.readFile(filePath, 'utf8');
        console.log('✅ 3. File content is ->', data);

        // 4. Append to File (Existing file mein aur text jodna)
        await fs.appendFile(filePath, '\nLearning Node.js is awesome!');
        console.log('✅ 4. New content appended.');

        // 5. Rename File (File ka naam badalna)
        await fs.rename(filePath, newFilePath);
        console.log('✅ 5. File renamed to renamedExample.txt.');

        /* ⚠️ NOTE: Maine Delete wale steps abhi comment kar diye hain taaki 
        tu actually VS Code ke sidebar mein folder aur file ko banta hua dekh sake. 
        Agar delete karna ho, toh in do lines ke aage se '//' hata dena.
        */

        // 6. Delete File 
        // await fs.unlink(newFilePath);
        // console.log('🗑️ 6. File deleted.');

        // 7. Delete Directory 
        // await fs.rm(dirPath, { recursive: true, force: true });
        // console.log('🗑️ 7. Directory deleted.');

    } catch (err) {
        console.error('❌ Error aagaya bhai:', err);
    }
}

// Function ko call kar rahe hain
manageFiles();