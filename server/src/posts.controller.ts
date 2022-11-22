import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './post.dto';
import { Post as DBPost } from '@prisma/client';

@Controller('/api/post')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  findAll(): Promise<DBPost[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return this.postsService.findOne(id);
  }

  @Post()
  async create(@Body() createPostDto: PostDto) {
    const newPost = await this.postsService.create(createPostDto);
    return newPost;
  }
}