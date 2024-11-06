import { UserService } from "../service/user";

export class UserController {
  private userService: UserService;

  /**
   *
   */
  constructor() {
    this.userService = new UserService();
  }

  updateUser = async (req: any, res: any): Promise<Response> => {
    const profileData = req.body;

    const data = await this.userService.updateUser(
      profileData.user_id,
      profileData
    );
    return data
      ? res.status(200).json({
          status: true,
          data,
        })
      : res.status(400).json({
          status: false,
          data,
        });
  };
}
