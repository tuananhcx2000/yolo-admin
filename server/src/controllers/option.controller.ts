import { NextFunction, Request, Response } from 'express';
import { getConnection, getManager, getRepository } from 'typeorm';
import { Emeta, Option } from '../models/option.entity';
import { OptionValue } from '../models/optionValue.entity';
import { CommonConfig } from './index';
class OptionController {
  public async getAllOption(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = parseInt(req.query.limit as string) || CommonConfig.DEFAUT_PERPAGE;
      const page = parseInt(req.query.page as string) || CommonConfig.DEFAUT_PAGE;
      const search = req.query.search || '';

      const optionRep = await getRepository(Option)
        .createQueryBuilder('option')
        .leftJoinAndSelect('option.optionValue', 'optionValue')
        .where('option.name LIKE :name', { name: `%${search}%` })
        .skip((page - 1) * limit)
        .take(limit)
        .getMany();

      const optionRepPage = await getRepository(Option)
        .createQueryBuilder('option')
        .where('option.name LIKE :name', { name: `%${search}%` })
        .getCount();

      res.send({
        data: optionRep,
        page: {
          totalPage: Math.ceil(optionRepPage / limit),
          perPage: limit,
          currentPage: page,
        },
      });
    } catch (error) {
      res.send({ message: error });
    }
  }
  public async createOption(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, meta } = req.body as { name: string; meta: string };
      const optionRep = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Option)
        .values({ name: name, meta: meta === 'color' ? Emeta.COLOR : Emeta.TEXT })
        .execute();

      res.send({ data: optionRep });
    } catch (error) {
      res.send({ message: error });
    }
  }

  public async getOneOption(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as { id: string };
      const optionRepo = await getRepository(Option)
        .createQueryBuilder('option')
        .where('option.id = :id', { id: id })
        .getOne();

      res.send({ data: optionRepo });
    } catch (error) {
      res.send(error);
    }
  }
  public async deleteOption(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params as { id: string };

    const queryRunner = getConnection().createQueryRunner();
    queryRunner.startTransaction();
    try {
      await queryRunner.manager.delete(OptionValue, { option: id });
      await queryRunner.manager.delete(Option, { id: id });
      res.status(200).send({ data: [] });
      queryRunner.commitTransaction();
    } catch (error) {
      res.status(500).send({ message: error });
      queryRunner.rollbackTransaction();
    } finally {
      queryRunner.release();
    }
  }

  public async getAllOptionWithVariant(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await getManager().find(Option, { relations: ['optionValue'] });

      res.send({
        success: true,
        data: data,
      });
    } catch (error) {
      res.send({ message: error });
    }
  }

  public async updateOption(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params as { id: string };
      const { name, meta } = req.body as { name: string; meta: string };
      await getConnection()
        .createQueryBuilder()
        .update(Option)
        .set({ name: name, meta: meta === 'color' ? Emeta.COLOR : Emeta.TEXT })
        .where('id = :id', { id: id })
        .execute();

      const optionRep = await getRepository(Option)
        .createQueryBuilder('option')
        .where('option.id = :id', { id: id })
        .getOne();

      return res.send({ data: optionRep });
    } catch (error) {
      return res.send({ message: error });
    }
  }
}

const optionController = new OptionController();
export default optionController;
