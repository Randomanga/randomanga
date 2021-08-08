import { IListService } from 'Core/Ports/IList.service';
import { IListModel } from 'Data/Models/List.model';
import { Request, Response } from 'express';
import { BaseHttpController } from 'Web/Lib/BaseHttp.controller';
interface ListControllerOptions {
  listService: IListService;
}

export class ListController extends BaseHttpController {
  private readonly _listService: IListService;
  constructor({ listService }: ListControllerOptions) {
    super();
    this._listService = listService;
  }
  public async get() {}
  public async find(req: Request, res: Response) {
    const id = req.params.id;
    const result = await this._listService.findOneList(id);
    this.toJson<IListModel>(res, { data: result });
  }
  public async create(req: Request, res: Response) {
    const saved = await this._listService.save({
      title: req.body.title,
      description: req.body.description,
      author: req.user!._id,
      list: req.body.list,
    });
    this.toJson<IListModel>(res, { data: saved });
  }
  public async delete(req: Request, res: Response) {
    const id = req.params.id;
    const deleted = await this._listService.delete(id);
    this.toJson<{ deleted: boolean }>(res, { data: { deleted: deleted } });
  }
  public async like(req: Request, res: Response) {}
  public async unlike(req: Request, res: Response) {}
}
