import multer from 'multer';
import path from 'path';

// Multer config
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.csv', '.xlsx', '.xls'];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Only .csv, .xlsx and .xls files are allowed!'), false);
  }
};

export const upload = multer({ storage, fileFilter });
