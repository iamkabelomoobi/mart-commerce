import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from '../entities/admin.entity';

@Injectable()
export class AdminRepository {
  constructor(
    @InjectRepository(Admin)
    private readonly repository: Repository<Admin>,
  ) {}

  /**
   * Retrieves all admins from the database.
   * @returns {Promise<Admin[]>} A promise that resolves to an array of admins.
   */
  findAll = async (): Promise<Admin[]> => {
    return this.repository.find();
  };

  /**
   * Finds an admin by the associated user ID and includes the user entity.
   * @param {string} userId - The ID of the user associated with the admin.
   * @returns {Promise<Admin | null>} A promise that resolves to the admin or null if not found.
   */
  find = async (userId: string): Promise<Admin | null> => {
    return this.repository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });
  };

  /**
   * Creates a new admin in the database.
   * @param {Partial<Admin>} admin - The admin data to create.
   * @returns {Promise<Admin>} A promise that resolves to the created admin.
   */
  create = async (admin: Partial<Admin>): Promise<Admin> => {
    const newAdmin = this.repository.create(admin);
    return this.repository.save(newAdmin);
  };

  /**
   * Updates an existing admin in the database.
   * @param {string} id - The ID of the admin to update.
   * @param {Partial<Admin>} admin - The updated admin data.
   * @returns {Promise<void>} A promise that resolves when the update is complete.
   */
  update = async (id: string, admin: Partial<Admin>): Promise<void> => {
    await this.repository.update(id, admin);
  };

  /**
   * Deletes an admin from the database.
   * @param {string} id - The ID of the admin to delete.
   * @returns {Promise<void>} A promise that resolves when the admin is deleted.
   */
  delete = async (id: string): Promise<void> => {
    await this.repository.delete(id);
  };
}
