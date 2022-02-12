import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { ExhibitionModule } from './exhibition/exhibition.module';

@Module({
  imports: [UserModule, PostModule, ExhibitionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}