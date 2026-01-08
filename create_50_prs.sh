#!/bin/bash

# Script to create 50 pull requests against main branch
REPO="mansurskTarento/test-langage-hackathon"
AUTHOR_EMAIL="mansurshaikmanu@gmail.com"
AUTHOR_NAME="Mansur Shaik"
REPO_PATH="/home/mansurshaik/Desktop/Office/practise/AIhackathon/test-langage-hackathon"

echo "=========================================="
echo "Creating 50 Pull Requests"
echo "=========================================="
echo ""

cd "$REPO_PATH"

# Configure git
git config user.email "$AUTHOR_EMAIL"
git config user.name "$AUTHOR_NAME"

# Fetch latest
git fetch origin
git pull origin main

SUCCESS=0
FAILED=0

for i in {1..50}; do
    BRANCH="feature/pr-$i"
    
    echo -n "PR #$i: "
    
    # Check out or create branch from main
    git checkout main > /dev/null 2>&1
    git pull origin main > /dev/null 2>&1
    git checkout -b "$BRANCH" > /dev/null 2>&1 || git checkout "$BRANCH" > /dev/null 2>&1
    git reset --hard origin/main > /dev/null 2>&1 || true
    
    # Create test feature file
    mkdir -p src/features
    cat > "src/features/feature-$i.ts" << EOF
/**
 * Feature PR #$i
 * Test feature for code review system testing
 * Author: $AUTHOR_NAME <$AUTHOR_EMAIL>
 */

export interface FeaturePR$i {
  id: number;
  name: string;
  description: string;
  enabled: boolean;
  version: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Feature $i Service
 */
export class FeaturePR${i}Service {
  private enabled: boolean = true;

  /**
   * Initialize feature $i
   */
  public initialize(): void {
    console.log('Feature PR #$i initialized');
  }

  /**
   * Process feature $i
   */
  public process(data: FeaturePR$i): FeaturePR$i {
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
export const featurePR${i}Service = new FeaturePR${i}Service();

// Export factory function
export function createFeaturePR$i(): FeaturePR$i {
  return {
    id: $i,
    name: 'Feature PR #$i',
    description: 'Test feature for PR #$i',
    enabled: true,
    version: '1.0.0',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
EOF
    
    # Add and commit
    git add "src/features/feature-$i.ts" > /dev/null 2>&1
    git commit -m "feat: Add feature PR #$i implementation

This is a test pull request #$i created for testing the code review application.

Features:
- Feature PR #$i service implementation
- Interface definition for Feature PR #$i
- Factory function for creating Feature PR #$i instances
- Service methods for process and status management

Author: $AUTHOR_NAME <$AUTHOR_EMAIL>" > /dev/null 2>&1
    
    # Push to remote
    git push -u origin "$BRANCH" -f > /dev/null 2>&1
    
    # Create PR via GitHub CLI
    RESULT=$(gh pr create \
        --repo "$REPO" \
        --head "$BRANCH" \
        --base "main" \
        --title "Feature PR #$i" \
        --body "Test pull request #$i created by $AUTHOR_NAME ($AUTHOR_EMAIL) for testing the code review application.

## Description
This PR contains test feature #$i implementation for the TypeScript project.

## Changes
- Added FeaturePR$i interface definition
- Implemented FeaturePR${i}Service class
- Created factory function for Feature PR #$i instances
- Added service methods for process and status management

## Testing
This PR is created for testing the code review system functionality and code analysis features.

## Author
$AUTHOR_NAME <$AUTHOR_EMAIL>" 2>&1)
    
    if echo "$RESULT" | grep -q "Opened"; then
        echo "✓ Created"
        SUCCESS=$((SUCCESS + 1))
    elif echo "$RESULT" | grep -q "already exists"; then
        echo "~ Already exists"
        SUCCESS=$((SUCCESS + 1))
    else
        echo "✗ Failed"
        FAILED=$((FAILED + 1))
    fi
    
    sleep 0.3
done

echo ""
echo "=========================================="
echo "✓ Success: $SUCCESS"
echo "✗ Failed: $FAILED"
echo "=========================================="
