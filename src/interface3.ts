type DefaultResponse = {
  id: (string|number),
  name: string,
  createdAt: string
}
type ID = (string|number)
type InputDto = {name: string, active: boolean}

interface Repository {
  readonly model: any;
  findAll(): DefaultResponse[],
  findById(id: ID): DefaultResponse
  insert(data: InputDto): DefaultResponse
  update(id: ID, data: InputDto): DefaultResponse
  destroy(id: ID): boolean
}

interface Searchable {
  search(filter: string): DefaultResponse[]
}

interface EventManager {
  dispatch(payload: object): void
}

interface FullRepository extends Repository, Searchable, EventManager {
}

// class UserRepository implements Repository, Searchable, EventManager {
class UserRepository implements FullRepository {
  dispatch(payload: object): void {
    throw new Error("Method not implemented.");
  }
  search(filter: string): DefaultResponse[] {
    throw new Error("Method not implemented.");
  }
  model: any;
  findAll(): DefaultResponse[] {
    throw new Error("Method not implemented.");
  }
  findById(id: ID): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  insert(data: InputDto): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  update(id: ID, data: InputDto): DefaultResponse {
    throw new Error("Method not implemented.");
  }
  destroy(id: ID): boolean {
    throw new Error("Method not implemented.");
  }

}

export {}
