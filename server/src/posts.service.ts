import { Injectable, Body } from '@nestjs/common';
import { PrismaClient, Post } from '@prisma/client';
import { PostDto } from './post.dto';

@Injectable()
export class PostsService {
  prisma = new PrismaClient();
  async findAll(): Promise<Post[]> {
    return await this.prisma.post.findMany();
  }
  findOne(id): string {
    return `this action will return post with id ${id}`;
  }
  async create(thisPostDto: PostDto): Promise<Post> {
    const thisPost = await this.prisma.post.create({
      data: {
        title: thisPostDto.title,
        textBody: thisPostDto.body,
        createdAt: thisPostDto.createdAt}
    })
    return thisPost;
  }
}