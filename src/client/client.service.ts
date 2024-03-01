import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientService {
  constructor(private readonly db: PrismaService){}
  create(createClientDto: CreateClientDto) {
    return this.db.client.create({
     data: createClientDto
    })
  }

  findAll() {
    return this.db.client.findMany();
  }

  findAllByName(name: string) {
    return this.db.client.findMany({
      where: { name }
    });
  }

  findOne(id: number) {
    return this.db.client.findMany({
      where: { id }
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.db.client.update({
      data: updateClientDto
    });
  }

  remove(id: number) {
    return this.db.client.deleteMany({
      where: { id }
    });
  }
}
