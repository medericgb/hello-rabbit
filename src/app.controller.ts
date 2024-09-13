import { Controller, Get, Post, Param, Query, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { SuiteContext } from 'node:test';

@Controller('cache')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async setCacheKey(@Query('key') key: string, @Query('value') value: any) {
    await this.appService.setCacheKey(key, value);
    return {
      success: true,
      status: 201,
      message: 'Key cached successfully',
    };
  }

  @Get('/get/:key')
  async getCacheKey(@Param('key') key: string) {
    const data = await this.appService.getCacheKey(key);
    console.log('Data here =>', data);
    return {
      success: true,
      status: 200,
      data,
    };
  }

  @Delete('/delete/:key')
  async deleteCacheKey(@Param('key') key: string) {
    await this.appService.deleteCacheKey(key);
    return {
      success: true,
      status: 200,
      message: 'Key deleted successfully',
    };
  }

  @Get('/reset')
  async resetCache() {
    await this.appService.resetCache();
    return {
      success: true,
      status: 200,
      message: 'Cache reset successfully',
    };
  }

  @Get('/store')
  async cacheStore() {
    const store = await this.appService.cacheStore();
    return {
      success: true,
      status: 200,
      store,
    };
  }
}
