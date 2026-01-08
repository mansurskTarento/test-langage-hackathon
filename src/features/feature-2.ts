/**
 * Feature PR #2
 * Test feature for code review system testing
 * Author: Mansur Shaik <mansurshaikmanu@gmail.com>
 */

export interface FeaturePR2 {
  id: number;
  name: string;
  description: string;
  enabled: boolean;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Feature 2 Service
 */
export class FeaturePR2Service {
  private enabled: boolean = true;

  /**
   * Initialize feature 2
   */
  public initialize(): void {
    console.log('Feature PR #2 initialized');
  }

  /**
   * Process feature 2
   */
  public process(data: FeaturePR2): FeaturePR2 {
    return {
      ...data,
      updatedAt: new Date(),
    };
  }

  /**
   * Get feature status
   */
  public getStatus(): boolean {
    return this.enabled;
  }

  /**
   * Set feature enabled
   */
  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }
}

// Export service instance
export const featurePR2Service = new FeaturePR2Service();

// Export factory function
export function createFeaturePR2(): FeaturePR2 {
  return {
    id: 2,
    name: 'Feature PR #2',
    description: 'Test feature for PR #2',
    enabled: true,
    version: '1.0.0',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
