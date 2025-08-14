import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { WalletModule } from './wallet/wallet.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { PackageModule } from './package/package.module';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';
import { ImgModule } from './img/img.module';

@Module({
  imports: [AdminModule, CustomerModule, WalletModule, PostModule, CommentModule, PackageModule, PaymentModule, AuthModule, ImgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
