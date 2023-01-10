import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    //console.log({value, metadata});

    if(!isValidObjectId(value)){
      throw new BadRequestException(`${value} is not a valid MongoID `)
    }

    return value;
  }
}
