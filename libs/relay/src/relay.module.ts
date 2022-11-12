import { Module } from '@nestjs/common';
import { RelayService } from './relay.service';

@Module({
  providers: [RelayService],
  exports: [RelayService],
})
export class RelayModule {}
