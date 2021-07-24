import { apiUrl } from '@config';
import { Post, UploadedFiles } from '@nestjs/common';
import { ApiV1Controller, Uploader } from '@shared';
import { FileTypes } from '@shared/enums';

@ApiV1Controller('uploader')
export class FileUploaderController {
    @Post()
    @Uploader('file', {
        allowFileTypes: [FileTypes.IMAGE, FileTypes.AUDIO, FileTypes.VIDEO],
        rawFileName: true,
        maxFileSize: '1 GiB',
    })
    uploaded(@UploadedFiles() file: any) {
        return {
            fileUrl: `${apiUrl}/res/${file.filename}`,
            originalName: file.originalname,
        };
    }
}
