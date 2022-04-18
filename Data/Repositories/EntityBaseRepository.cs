
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore;
using System;
using System.Data.Common;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PlanePort.Data.Repositories
{
    using Abstract;
    using Models;
    using Data;

    public class EntityBaseRepository<T> : IEntityBaseRepository<T> where T : class, IEntityBase, new()
    {
        private PlanePortContext _context;

        public EntityBaseRepository(PlanePortContext context)
        {
            _context = context;    
        }

        public virtual IEnumerable<T> GetAll()
        {
            return _context.Set<T>().AsEnumerable();
        }

        public virtual int Count()
        {
            return _context.Set<T>().Count();
        }

        public IEnumerable<T> AllIncluding(params Expression<Func<T, object>>[] includeProperties)
        {
            IQueryable<T> query = _context.Set<T>();
            foreach (var includeProperty in includeProperties)
            {
                query = query.Include(includeProperty);
            }
            return query.AsEnumerable();
        }

        public T GetSingle(string id)
        {
            return _context.Set<T>().FirstOrDefault(x => x.Id == id);
        }

        public T GetSingle(Expression<Func<T, bool>> predicate)
        {
            return _context.Set<T>().FirstOrDefault(predicate);
        }

        public T GetSingle(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includeProperties)
        {
            IQueryable<T> query = _context.Set<T>();
            foreach (var includeProperty in includeProperties)
            {
                query = query.Include(includeProperty);
            }

            return query.Where(predicate).FirstOrDefault();
        }

        public IEnumerable<T> FindBy(Expression<Func<T, bool>> predicate)
        {
            return _context.Set<T>().Where(predicate);
        }

        public void Add(T entity)
        {
            EntityEntry dbEntityEntry = _context.Entry<T>(entity);
            _context.Set<T>().Add(entity);
        }

        public void Update(T entity)
        {
            EntityEntry dbEntityEntry = _context.Entry<T>(entity);
            dbEntityEntry.State = EntityState.Modified;
        }

        public void Delete(T entity)
        {
            EntityEntry dbEntityEntry = _context.Entry<T>(entity);
            dbEntityEntry.State = EntityState.Deleted;
        }

        public void DeleteWhere(Expression<Func<T, bool>> predicate)
        {
            IEnumerable<T> entities = _context.Set<T>().Where(predicate);

            foreach(var entity in entities)
            {
                _context.Entry<T>(entity).State = EntityState.Deleted;
            }
        }

        public void Commit()
        {
            _context.SaveChanges();
        }
    }
}
